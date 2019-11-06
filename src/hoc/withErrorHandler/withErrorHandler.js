import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux/Aux'


const withErrorHandler = (WrappedComponent, axios) =>{

    return class extends Component { 

        state = {
            error : null
        }
        
        componentDidMount () {

            this.reqInterceptor = axios.interceptors.request.use(req => {

                this.setState({error: null})

                return req
            })

            this.resInterceptor= axios.interceptors.response.use(res => res, error => {

                this.setState({ error : error})
            })
        }

        errorConfirmedHandler =() =>{

            this.setState({error:null})

        }

        componentWillUnmount =() =>{

            console.log('Will Unmount', this.resInterceptor, this.resInterceptor)

            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.request.eject(this.resInterceptor)

        }

        render () {

            return (
                <Aux>
                    <Modal 
                    show = {this.state.error}
                    modalClosed = {this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                        "Please verify HTTP request and/or API End point used"
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }

    }

}

export default withErrorHandler