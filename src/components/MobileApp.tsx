
const MobileApp = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              All-in-one finance for any business
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Track all your financial activity in one place with automated expense tracking designed to save you time and help you stay on top of your finances.
            </p>
            
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg card-shadow">
                <h3 className="font-semibold mb-2">Send instant transfers</h3>
                <p className="text-muted-foreground text-sm">
                  Send money to anyone in seconds using just their email address or phone number.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg card-shadow">
                <h3 className="font-semibold mb-2">Track business expenses</h3>
                <p className="text-muted-foreground text-sm">
                  All business transactions are automatically categorized and reconciled with bank statements.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg card-shadow">
                <h3 className="font-semibold mb-2">Manage your cash flow quarterly</h3>
                <p className="text-muted-foreground text-sm">
                  Get detailed insights into your spending patterns and cash flow with quarterly reports.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 mx-auto max-w-sm">
              <div className="bg-background rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Dashboard</h3>
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Balance</span>
                    <span className="font-semibold">$5,248.32</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Income</span>
                    <span className="font-semibold text-green-600">+$2,041.24</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Expenses</span>
                    <span className="font-semibold text-red-600">-$784.15</span>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-2">Recent transaction</div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Coffee Shop</span>
                    <span className="text-red-600">-$4.20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
