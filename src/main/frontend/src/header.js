
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #666;
    color: #fff;
    padding: 10px;
    text-align: center;
`;

const StyledNav = styled.nav`
    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

    li {
        margin: 0 10px;
        cursor: pointer;
        color: green;
    }

    li:hover {
        text-decoration: underline;
    }
`;

const Header = () => {

    return (
        <div class="page">
            <StyledHeader>
                <h2>알고리즘 / JPA / react </h2>
                <StyledNav>
                    <ul>
                        {/* <li><Link to="/algorithm">알고리즘</Link></li> */}
                        <li><Link to="/jpa">JPA</Link></li>
                        {/* <li><Link to="/react">React</Link></li> */}
                    </ul>
                </StyledNav>
            </StyledHeader>
        </div>

 

    )

}

export default Header;