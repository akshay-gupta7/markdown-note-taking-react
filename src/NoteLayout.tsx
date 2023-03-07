import { useParams, Navigate } from "react-router-dom"
import { Note } from "./App"

type NoteLayoutProps={
    notes: Note[]
}

export function NoteLayout({ notes }: NoteLayoutProps){
    const { id } = useParams()
    const note = notes.find(n => n.id === id)

    if (note == null) return <Navigate  to="/" replace />

    return <h1>Hello Mate</h1>
}