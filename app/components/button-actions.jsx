import { Button } from "react-bootstrap"


export default function ButtonActions({colorButton}) {
    // console.log(actions);
  return (
    <Button 
        variant={`${colorButton}`}
    >
    Create Task
</Button>
  )
}
