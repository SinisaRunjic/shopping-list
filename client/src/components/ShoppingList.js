import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Button, Spinner } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';



const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('/api/items')
            .then(res => {
                setItems(res.data)
                setLoading(false)
            })
    }, [])
    console.log(items)
    return (
        <Container>
            <Button
                color='light'
                style={{ marginBottom: '2rem' }}
                onClick={() => {
                    const name = prompt('Enter Item');
                    axios.post('/api/items', { name })
                        .then(res => {
                            setItems([...items, res.data])
                        })
                }}
            >Add item</Button>
            {loading && <Spinner color="primary" />}
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(item =>
                        <CSSTransition key={item._id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        axios.delete(`/api/items/${item._id}`)
                                            .then(res => {
                                                if (res.data.success) setItems([...items.filter(it => it._id !== item._id)])
                                            })
                                    }}
                                >&times;</Button>
                                {item.name}
                            </ListGroupItem>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </ListGroup>
        </Container >
    )
}

export default ShoppingList;