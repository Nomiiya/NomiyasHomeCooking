import  Stack  from 'react-bootstrap/Stack'

export default function SplitScreen({
    children
}){
    const [left, right] = children;

    return(
        <>
            <div className="bg-light border">
                Header
            </div>
            <Stack direction="horizontal" className='mx-auto'>
                <div className='col-3'>{left}</div>
                <div className='col-9'>{right}</div>
            </Stack>
        </>
    )
}