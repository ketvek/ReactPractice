import "./styles.css";
import Hellofun from "./components/Hellofun";
import HelloCla from "./components/HelloCla";
import HelloProp from "./components/HelloProp";
import Comment from "./components/Comment";

export default function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  };
  return (
    <div className="App">
      <Hellofun />
      <HelloCla />
      <HelloProp name="Mango" weight="20gm" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  );
}
