import React from 'react';

function AddCard({addThing}) {
  const submit = (e) => {
    e.preventDefault();
    addThing({title: e.target.title.value, content: e.target.content.value})
  }
  return (
    <form onSubmit={(e) => submit(e)}>
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="content" name="content" />
      <button>Add Card</button>
    </form>
  )
}

export default AddCard;