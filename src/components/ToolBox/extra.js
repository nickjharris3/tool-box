class ToolList extends Component {
    state = {
        tools: [],
        searchString: ''
    }

constructor() {
    super()
    this.getTools()
};

getTools = () => {
    client.getEntries({
        content_type: 'tool',
        query: this.state.searchString
    })
    .then((response) => {
        this.setState({tools: response.items})
    })
    .catch((error) => {
        console.log('Error occured when fetching data.')
        console.log(error)
    })
}

onSearchInputChange = (event) => {
 if (event.target.value) {
     this.setState({searchString: event.target.value})
 } else {
     this.setState({searchString: ''})
 }
    this.getTools()
}

    render (){
        return (
            <div>
                {this.state.tools ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="SearchInput"
                            placeholder="Search for Tools"
                            margin="normal"
                            onChange={this.onSearchInputChange} />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.tools.map(currentTool => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Tool tool={currentTool} />
                                </Grid>
                            )) }
                        </Grid>
                    </div>
                ) : 'No tools found.'}
            </div>
        )
    }
}

export default ToolList;