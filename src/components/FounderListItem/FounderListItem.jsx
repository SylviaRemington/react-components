// src/components/FounderListItem/FounderListItem.jsx
// DECLARED THE COMPONENT & EXPORTED IT //the component FounderListItem

const FounderListItem = (props) => {
  return (
    <li>
      <h3>Hello, I'm {props.name}!</h3>
    </li>
  );
};

export default FounderListItem;