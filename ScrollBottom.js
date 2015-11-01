componentDidUpdate() {
	setTimeout(()=>{
		this.scrollBottom();
	},200);
},

scrollBottom() {
	this.refs.helperViewInner.measure((oxInner, oyInner, widthInner, heightInner) => {
		this.refs.container.measure((ox, oy, width, height) => {
			if (heightInner < height) return;
			this.refs.helperView.scrollTo(heightInner - height + oyInner);
		});
	});
},

render() {
	return(
		<View ref="container" style={styles.container}>
			<ScrollView ref="helperView">
				<View ref="helperViewInner" style={styles.container}>
					<Messages data={this.state.data} />
				</View>
			</ScrollView>
			<Form ref="form" for="message" add={this.addMessage} />
		</View>
	);
}
