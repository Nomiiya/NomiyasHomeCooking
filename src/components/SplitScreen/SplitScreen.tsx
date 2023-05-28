import {Container, Pane} from './SplitScreenStyle'

export default function SplitScreen({
    left: Left,
    right: Right,
    leftweight = 1,
    rightweight = 1
}){
    return(
        <>
            <Container>
                <Pane weight={leftweight}>
                    <Left />
                </Pane>
                <Pane weight={rightweight}>
                    <Right />
                </Pane>
            </Container>
        </>
    )
}