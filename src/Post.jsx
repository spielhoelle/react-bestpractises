import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  flexed: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}
export default function Post(props) {
  return (
    props.editing && props.editing._id === props.post._id ? (
     <li className="black-text collection-item">
      <form  onSubmit={(event) => props.handleUpdate(event, props.post)}>
          <label className="w-100">
            Name:
            <input className="form-control" defaultValue={props.editing.name} id="name" onChange={props.handleChange}/>
          </label>
          <label className="w-100">
            Content:
            <textarea id="content" className="materialize-textarea" defaultValue={props.editing.content} onChange={props.handleChange}/>
          </label>
        <div style={styles.flexed} className="">
          <a href="#!" className="" onClick={(e) => props.handleCancel(e)}>cancel</a>
          <input className="btn green accent-2" type="submit" value="Submit"/>
        </div>
      </form>
      </li>
  ) : (
     <li className="black-text collection-item avatar">
      <i className="material-icons circle">folder</i>
      <span className="title">{ props.post.name}</span>
      <p>{props.post.content}</p>
      <div className="secondary-content">
        <a href="#!" className="" onClick={() => props.handleEdit(props.post)}><i className="material-icons teal-text">edit</i></a>
        <a href="#!" className="" onClick={() => props.handleDelete(props.post._id)}><i className="material-icons red-text">remove</i></a>
      </div>
    </li>
    )
  )
};
// TODO those proptypes should be checked correctly
// https://reactjs.org/docs/typechecking-with-proptypes.html
Post.propTypes = {
  editing: PropTypes.array,
  handleCancel: PropTypes.bool
};
