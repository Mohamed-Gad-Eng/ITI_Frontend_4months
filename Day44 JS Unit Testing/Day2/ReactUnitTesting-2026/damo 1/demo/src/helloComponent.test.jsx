import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Hello from "./hello";



describe('Test Hello Component',()=>{
    test('Test component Render',()=>{
        render(<Hello name='amira' />)
        expect(screen.getByText('Hello, amira!')).toBeInTheDocument()
    })
})