import React from 'react'

class RemoveBuilding extends React.Component {
    render () {
        const {delBuilding, id} = this.props
        return (
            <div>
                <button className="btn btn-sm btn-danger"
                    onClick={() => delBuilding(id)}>
                    x
                </button>
            </div>
        )
    }
}

export default RemoveBuilding