import { useSelector } from "react-redux";

const Header = () => {
  const {tasksList } =useSelector(state => state.tasks)
  return (
    <>
        <h1 className=' text-center my-4 text-primary'>Project management</h1>
        <p className='text-center lead '> Currently { tasksList.length } task(s) pending.</p>
    </>
  )
}

export default Header