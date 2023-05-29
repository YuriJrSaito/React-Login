import './style.css';


export const ComponentsLogin = ({children}:{children: JSX.Element}) =>{
    return (
        <>
            <div className="container">
                <div className="container-login">
                    <div className="wrap-login">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}