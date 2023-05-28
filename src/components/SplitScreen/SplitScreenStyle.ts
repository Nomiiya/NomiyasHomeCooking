import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

const Pane = styled.div` 
    flex:${props => props.weight};
`