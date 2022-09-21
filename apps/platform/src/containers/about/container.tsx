import { FC } from "react";
import { Route } from "wouter";
import { AboutGrid } from "../../components/AboutGrid";
import { Welcome } from "./welcome";

export const AboutContainer:FC = () => {
    return (
        <AboutGrid>
            <Route path="/about/welcome">
                <Welcome/>
            </Route>
        </AboutGrid>
    )
}