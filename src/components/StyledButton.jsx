import styled from "styled-components";
import ViewButton from "./ViewButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";


const StyledViewButton = styled.button`
  background-color: #c4dc50;
  color: azure;
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

const StyledEditButton = styled.button`
  background-color: #49c351;
  color: azure;
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

const StyledDeleteButton = styled.button`
  background-color: #d5e741;
  color: #009929;
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;



export { StyledViewButton, StyledDeleteButton , StyledEditButton };
