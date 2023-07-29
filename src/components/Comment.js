import react from "react";

function comment(props){

  const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
    return (
    <div className="Comment">
    <div className="UserInfo">
      <img className="Avatar"
           src={props.author.avatarUrl}
           alt={props.author.name} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
    <div className="Comment-text">
      {props.text}
    </div>
    <div className="Comment-date">
      {formatDate(props.date)}
    </div>
  </div>
);
}

export default Comment;