#include<bits/stdc++.h>
using namespace std;

#define ll long long
#define vl vector<ll>
#define yes cout<<"YES"<<"\n"
#define no cout<<"NO"<<"\n"
#define el cout<<"\n"
#define arrin ll a[n];for(int i=0;i<n;i++){cin>>a[i];}
#define arrinb ll b[n];for(int i=0;i<n;i++){cin>>b[i];}

ll binpow(ll a, ll b) {if (b == 0)return 1;ll res = binpow(a, b / 2);if (b % 2) return res * res * a; else return res * res;}
ll binpowmod(ll a, ll b, ll m) {a %= m;ll res = 1; while (b > 0) {if (b & 1)res = res * a % m;a = a * a % m;b >>= 1;}return res;}
ll gcd(ll a,ll b){if(b>a){return gcd(b,a);}if(b==0){return a;}return gcd(b,a%b);}
ll lcm(ll a,ll b){return (a*b)/gcd(a,b);}
ll c1s(string s){ll c=0;for(int i=0;i<s.size();i++){if(s[i]=='1')c++;}return c;}
ll c0s(string s){ll c=0;for(int i=0;i<s.size();i++){if(s[i]=='0')c++;}return c;}
bool isPrime(int n){if (n <= 1)return false;for (int i = 2; i * i <= n; i++) {if (n % i == 0) return false;}return true;}
bool isSquare(long double x){if (x >= 0) {long long sr = sqrt(x); return (sr * sr == x);} return false;}
bool isPalindrome(string &s, int low, int high) {while (low < high) {if (s[low++] != s[high--]) return false;}return true;}


void solve(){ 
    ll n;
    cin>>n;
    arrin;
    ll mx=a[0];
    ll ans=0;
    for(int i=1;i<n;i++){
           if(a[i]>mx){
               ans=ans+(a[i]-mx);
               mx=a[i];
           }
           else if(a[i]==mx){
            continue;
           }
           else{
            ll dif=mx-a[i];
            if(dif>ans){
                ans=dif;
            }
           }
    }
cout<<ans<<endl;

}

int main(){
ios_base::sync_with_stdio(false);
cin.tie(NULL);
ll t;cin>>t;
while(t--){
    solve();
}
}