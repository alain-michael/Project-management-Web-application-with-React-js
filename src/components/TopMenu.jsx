import { TextField } from "@mui/material";
function TopMenu(props) {
    const {user, getUser} = props;
    return (
        <div className="navbar text-xl">
            <div style={{display: 'flex', alignItems: 'center'}} className="logo">
                <h1 className="text-2xl font-bold mt-2">ToDo App</h1>
            </div>
        </div>)}

export default TopMenu;