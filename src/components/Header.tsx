
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="font-bold text-xl text-primary">UnitedCard</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Personal</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Business</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help & Resources</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">Log in</button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
