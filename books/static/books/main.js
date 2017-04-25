$(function() {
  // class SearchPanel extends React.Component {
  //   render() {
  //     return (
  //       <div className="row">
  //         <div className="one-fourth column">
  //         </div>
  //       </div>
  //     );
  //   }
  // }

  class BookPanel extends React.Component {
    render() {
      return (
        <div className="row">
        </div>
      );
    }
  }

  // ========================================
  ReactDOM.render(
    <BookPanel />,
    document.getElementById('content')
  );
});
