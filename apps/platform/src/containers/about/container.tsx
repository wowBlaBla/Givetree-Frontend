import { FC } from "react";
import { Route } from "wouter";
import { Welcome } from "./welcome";

export const AboutContainer:FC = () => {
    return (
        <div className="p-12">
            <Route path="/about/welcome">
                <Welcome/>
            </Route>
        </div>
    )
}