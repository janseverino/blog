import { Redirect, Route, Switch } from 'react-router-dom';
import About  from '../Pages/About/About';
import Blog  from '../Pages/Blog/Blogs';
import EditeBlog from '../Pages/Blog/EditeBlog';
import NewBlog from '../Pages/Blog/NewBlog';
import ViewerBlog from '../Pages/Blog/ViewerBlog';
import ContactMessage from '../Pages/Contact/Contact';
import Home  from '../Pages/Home/Home';

export default function PagesRoutes () {
    return (        
        <Switch>
            <Route path={'/about'} component={About} />
            <Route path={'/blog/new'} component={NewBlog} />    
            <Route exact path={'/blog'} component={Blog} />
            <Route exact path={'/blog/:id'} component={ViewerBlog} />
            <Route path={'/contact'} component={ContactMessage}/>
            <Route path={'/home'} component={Home} />    
            <Route path={'/edit/:id'} component={EditeBlog} />    
            <Redirect from='/' to='/home' />   
        </Switch>
    )
}