import type { Metadata } from 'next'


export const metadata :Metadata = ({
    title: 'About',
    description: 'The about page'
})

export default function layout({children}:{children:React.ReactNode}){
    return(
        <div className='font-bold'>
            {children}
        </div>
    )
}