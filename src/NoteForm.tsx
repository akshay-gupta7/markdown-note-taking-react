import { Col, Row, Form, Stack, Button } from "react-bootstrap"
import CreatableReactSelect from "react-select/creatable"
import { Link } from "react-router-dom"
import { useRef } from "react"

type Note = {
    id: string
} & NoteData

type NoteData = {
    title: string
    markdown: string
    tags: Tag[]
}

type Tag ={
    id: string
    label: string
}

export function NoteForm({ onSubmit }){
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLInputElement>(null)

    function handleSubmit(e: FormEvent){
        e.preventDefault()
    }

    return (
    <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
            <Row>
                <Col>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={titleRef} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <CreatableReactSelect isMulti />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="markdown">
                <Form.Label>Body</Form.Label>
                <Form.Control required as="textarea" ref={markdownRef} rows={15} />
            </Form.Group>
            <Stack direction="horizontal" gap={2} className="justify-content-end">
                <Button type="submit" variant="primary" >
                    Save
                </Button>
                <Link to="..">
                    <Button type="button" variant="outline-secondary">
                        Cancel
                    </Button>
                </Link>
            </Stack>
        </Stack>
    </Form>
    )
}
