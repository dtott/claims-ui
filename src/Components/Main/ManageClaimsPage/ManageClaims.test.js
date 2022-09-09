import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import claimStore from "../../store/store";
import JumbotronManageClaims from "../ManageClaimsPage/JumbotronManageClaims";
import ManageClaims from "./ManageClaims";

test ("check the option to filter claims is loaded" , () => {
    render(<JumbotronManageClaims />);
    const messageParagraph = screen.queryByText("Please select what claims to view");
    expect(messageParagraph).toBeInTheDocument();
})
