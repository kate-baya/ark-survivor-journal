import React from 'react'
import {Link, Route} from 'react-router-dom'
import { connect } from 'react-redux'

class DinoList extends React.Component {

    render () {
        return (
            <ul className='list'>
            {this.props.dinos.map((dino, id) => {
                return <li key={id}>
                    <Link to={`/tamedDinos/${dino.id}`}>{dino.name} ({dino.level})</Link>
                    <Route path={`/tamedDinos/:id`} render={({match}) => {
                        const comparingToOther = match.params.id != dino.id
                        return <div>
                        {comparingToOther && <Link key={id} to={`/tamedDinos/${match.params.id}/${dino.id}`}><p>Compare</p></Link>}
                        </div> 
                        }}/>
                    </li>
            })}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dinos: state.dinos
    }
}

export default connect(mapStateToProps)(DinoList)