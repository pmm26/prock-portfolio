function NewlineText(props: any) {
  const newText = props.children.split('\nn')
  .map((str: any, index: number, array: []) => {
    return (
      <>
      {str}
      {array.length-1 !== index && (
        <br />
      )}
      </>
    )
  })
  
  return newText;
}

export default NewlineText