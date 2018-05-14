import React from 'react';
import axios from 'axios';

const styles = {
  flexed: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  nomargin: {
    margin: 0
  },
  fullwidth: {
    width: "100%"
  }
}

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      preview: JSON.parse(localStorage.getItem('preview')) || ""
    }
  }
  componentDidMount = () =>{
    if (localStorage.getItem('preview') !== undefined){
      this.state
    }
  }
  handleChange(event) {
    //https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
    event.preventDefault();
    console.log(this.fileInput.files[0]);

    //This creates a base64 encoded version of the image, displayes it and saves it in the LC
    var reader = new FileReader();
    reader.onload = function(e) {
      document.querySelector('#image').src = e.target.result
      localStorage.setItem('preview', JSON.stringify(e.target.result))
    }
    reader.readAsDataURL(this.fileInput.files[0]);

  }

    render() {
      return (
        <form name="submitform" className="card-content" onSubmit={this.props.handleSubmit}>
          <div style={styles.flexed}>
            <h4 style={styles.nomargin}>Create a post:</h4>
            <div className="form-group">
              <input className="btn green accent-2" type="submit" value="Submit"/>
            </div>
          </div>
          <div className="form-group">
            <label className="w-100">
              Name:
              <input className="form-control" id="name" onChange={this.props.handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label className="w-100">
              Content:
              <textarea id="content" className="materialize-textarea" onChange={this.props.handleChange} />
            </label>
          </div>
           <input
            onChange={this.handleChange}
            type="file"
            ref={input => {
              this.fileInput = input;
            }}
          />
          <img style={styles.fullwidth} src={this.state.preview} id="image"/>

        </form>
    )
  }
};
