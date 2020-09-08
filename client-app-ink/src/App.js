import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import './App.css'

const GET_MESSAGES = gql`
    {
      messages {
            id
            username
            message
        }
    }
`

const Message = ({ message: { username, message } }) => (
    <div className='Card'>
        <div>
        <h1 className='Card--name'>{username}</h1>
        </div>
        <div>
          {message}
        </div>
    </div>
)

function App() {
    const { loading, error, data } = useQuery(GET_MESSAGES)

    if (error) return <h1>Something went wrong!</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <main className='App'>
            {data.messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </main>
    )
}

export default App