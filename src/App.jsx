import React from 'react';
import axios from 'axios';
import Post from './Post.jsx';
import SearchBar from './SearchBar.jsx';
import Nav from './Nav.jsx';
import CreatePost from './CreatePost.jsx';

export const ThemeContext = React.createContext();

//TODO remove those inline styles and replace by two different themes. Checkout the Nav how the theme is passed down.
// https://material.io/tools/color/#!/?view.left=0&view.right=0
const styles = {
  nomargin: {
    margin: 0
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    //NOTE Read about refs https://reactjs.org/docs/refs-and-the-dom.html
    this.searchRef = React.createRef();
    this.state = {
      posts: [],
      form: {},
      search: "",
      editing: null
    }
    //TODO Some of this bindings are not needed anymore
    //handleSubmit and handleChange can be removed but handleDelete not. Fix that
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  componentDidMount = () => {
    fetch(`http://localhost:5000/api/posts`).then(resp => resp.json()).then(posts => {
      this.setState({posts});
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let form = {...this.state.form}
    fetch("http://localhost:5000/api/posts", {
         method: "POST",
         body: JSON.stringify(form),
         headers: {
           "content-type": "application/json"
         }
       }).then(response => response.json())
       .then(response => {
         M.toast({html: `Post ${form.name} created!`})
         let posts = [...this.state.posts]
         posts.push(response.post)
         this.setState({posts});
         document.forms["submitform"].reset()
       });

  }
  handleChange = (event) => {
    let form = { ...this.state.form };
    if (event.target.value !== "") {
      form[event.target.id] = event.target.value
    }
    this.setState({form: form});
  }

  handleSearch = (e) => {
    this.setState({search: this.searchRef.current.value});
  }

  handleDelete(id) {
    //TODO this could be replaced by a native fetch
    axios.delete(`http://localhost:5000/api/posts/${id}`).then(response => {
      console.log("Slide deleted successful: ", response);
      fetch(`http://localhost:5000/api/posts`).then(resp => resp.json()).then(posts => {
        this.setState({posts});
        M.toast({html: 'Post deleted!'})
      });
    }).catch(function(error) {
      console.log("Error: ", error);
    })
  }

  handleUpdate(event, post){
    //TODO this could be replaced by a native fetch
    event.preventDefault()
    axios.put(`http://localhost:5000/api/posts/${post._id}`, this.state.form).then(response => {
      console.log("Slide edited successful: ", response);
      fetch(`http://localhost:5000/api/posts`).then(resp => resp.json()).then(posts => {
        this.setState({posts, editing: null});
        M.toast({html: 'Post updated successfully!'})

      });
    }).catch(function(error) {
      console.log("Error: ", error);
    })

  }
  handleEdit = (post) => {
    this.setState({
      form: post,
      editing: post
    })
  }
  handleCancel = (e) => {
    this.setState({
      editing: null
    })
  }
  render() {
    const posts = this.state.search !== "" ? this.state.posts.filter(p => p.name.toLowerCase().includes(this.state.search.toLowerCase())) : this.state.posts
    const posttemplate =
              (<ul className="collection">
                {posts.map(post => (
                  <Post
                    editing={this.state.editing}
                    handleUpdate={this.handleUpdate}
                    handleCancel={this.handleCancel}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    handleChange={this.handleChange}
                    post={post}
                    key={post._id}
                  />
                  ))
                }
                </ul>)

    return (
      <React.Fragment>
        <ThemeContext.Provider value="dark">
           <Nav/>
        </ThemeContext.Provider>
        <div className="container" >
          <div className="my-3 card">
            <CreatePost
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              form={this.state.form}
            />
          </div>
          <div className="my-3 card">
            <div className="card-content">
              <h4 style={styles.nomargin}>List of all posts:</h4>
            </div>
            <SearchBar inputRef={this.searchRef} handleSearch={this.handleSearch}/>
            {posts.length > 0 ? posttemplate : <div className="card-content">Nothing found</div> }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
