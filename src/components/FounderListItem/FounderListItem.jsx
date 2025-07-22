// src/components/FounderListItem/FounderListItem.jsx
// DECLARED THE COMPONENT & EXPORTED IT //the component FounderListItem

const FounderListItem = (props) => {
  return (
    <li>
      <h3>Hello, I'm {props.founder.name}, the {props.founder.title}!</h3>
      <p>My credentials are...wait for it, wait for it... {props.founder.credential}.</p>
    </li>
  );
};

export default FounderListItem;