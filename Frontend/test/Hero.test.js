import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../src/Landing_page/Home/Hero";

describe("Hero Component", () => {
    test("renders Hero component correctly", () => {
        render(<Hero />);
        const heroImage=screen.getByAltTeXt("Hero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
});