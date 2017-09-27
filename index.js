import React, {Component, PropTypes} from 'react';
class SimpleArticle extends Component {
  static propTypes = {
    FRN_rawResponses: PropTypes.array,
    FRN_requestError: PropTypes.object
  };

  componentWillMount() {
      const {
        FRN_rawResponses: [
          {
            data: {
              body = ''
            } = {}
          } = {}
        ] = [],
      } = this.props;

      if (body) {
        const bodyHtmlWithoutScripts = body.split(/<script[\s\S]*?>[\s\S]*?<\/script>/gi).join('');
        this.setState({
          bodyHtml: bodyHtmlWithoutScripts
        });
      }

  }

  render() {
    const {
      FRN_rawResponses: [
        {
          data: {
            headline = '',
            abstract = ''
          } = {}
        } = {}
      ] = []
    } = this.props;

    const {
      bodyHtml
    } = this.state;

    return (
      <div >
        <style dangerouslySetInnerHTML={{ __html: `
          .SimpleArticle-headline{
            overflow-x: hidden;
            color: green;
          }
          .SimpleArticle-abstract{
            text-decoration: overline;
          }
          .SimpleArticle-body{
            transform: rotate(.5deg);
          }
        ` }} />
        <h1 className="SimpleArticle-headline"> {headline} </h1>
        <div className="SimpleArticle-abstract" dangerouslySetInnerHTML={{ __html: abstract }}></div>
        <div className="SimpleArticle-body" dangerouslySetInnerHTML={{ __html: bodyHtml }}></div>
      </div>
    );
  }
}
export default SimpleArticle;
