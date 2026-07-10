
export const Props = (props) => {
    console.log(props);
  return (
    <div className='bg-green-300 p-4 m-4 rounded-lg'>
        <h3>Mr. {props.Student}</h3>
        <p>Completed the course {props.course}</p>
    </div>
  )
}
