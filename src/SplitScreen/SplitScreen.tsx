import  Stack  from 'react-bootstrap/Stack'

export default function SplitScreen({
    children
}){
    const [left, right] = children;

    return(
        <>
            <Stack direction="horizontal" className='mx-auto vh-100 w-75'>
                <div className='col-3 bg-light border vh-100' >{left}</div>
                <div className='col-9 bg-light border vh-100'>{right}</div>
            </Stack>
        </>
    )
}