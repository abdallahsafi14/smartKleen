import styled from "styled-components";

export const Styles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main-data {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
  }

  .children-content {
    display: inline-block;
  }
`;

export const ChildrenContent = styled.div`
  display: inline-block;
`;
