import { Table, Card } from "react-bootstrap"

function PostList () {

    return (
        <Card className="App">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username:</th>
                        <th>Title:</th>
                        <th>Type:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>name</td>
                        <td>title</td>
                        <td>type</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>name2</td>
                        <td>title2</td>
                        <td>type2</td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    )
}

export default PostList