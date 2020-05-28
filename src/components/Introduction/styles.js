import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 800px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.primary};
`
export const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 60px;
  font-size: 38px;
  font-weight: bolder;
  color: ${({ theme }) => theme.background};
`
export const SubTitle = styled.div`
  font-size: 20px;
  max-width: 850px;
  margin-top: 20px;
  color: ${({ theme }) => theme.background};
  a {
    color: ${({ theme }) => theme.darkWhite};
  }
`
