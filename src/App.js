import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React survey</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Form>
            <div key={`default-radio`} className="mb-1">
              <Card.Title>Question</Card.Title>
              <Form.Check 
                type='radio'
                id='default-radio'
                name='group 1'
                label='Opcion 1'
              />
              <Form.Check 
                type='radio'
                id='default-radio'
                name='group 1'
                label='Opcion 2'
              />
              <Form.Check 
                type='radio'
                id='default-radio'
                name='group 1'
                label='Opcion 3'
              />
              <Form.Check 
                type='radio'
                id='default-radio'
                name='group 1'
                label='Opcion 4'
              />
            </div>
          </Form>
        </Card.Body>
      </Card>
      </div>
  );
}

export default App;
