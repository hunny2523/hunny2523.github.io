import React from 'react'
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap"



export default function Cards(props) {
    const data=props.data
  return (
         <div className="col-12 col-md-4">
                <Card className="m-2">
                    <CardBody>
                        <CardTitle tag="h5">
                            Reminder of : {data.name}
                        </CardTitle>
                        <CardText>
                            Time :{data.time}
                        </CardText>
                        <CardText>
                            desc :{data.desc}
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
   
