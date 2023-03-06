import styled from 'styled-components';

const Btn = styled.button`
  width: 110px;

  padding: 10px 30px;
  margin-bottom: 15px;
  border: 1px solid rgb(204, 204, 204);
  background-color: rgb(230, 229, 229);
  border-radius: 7px;
  text-decoration: none;
  cursor: pointer;
  color: deeppink;
  text-transform: uppercase;
  margin-left: 18px;

  font-size: small;
  text-align: center;

  :hover {
    background-color: rgb(160, 159, 159);
    text-transform: lowercase;
  }
`;

export default Btn;

// .btn.active {
//   background-color: deeppink;
//   color: white;
// }
