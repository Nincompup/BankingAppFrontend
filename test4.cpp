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
const ll mod=1000000007;

#define MAXN   1000001
 



void sieve()
{
    spf[1] = 1;
    for (int i=2; i<MAXN; i++)
 
        // marking smallest prime factor for every
        // number to be itself.
        spf[i] = i;
 
    // separately marking spf for every even
    // number as 2
    for (int i=4; i<MAXN; i+=2)
        spf[i] = 2;
 
    for (int i=3; i*i<MAXN; i++)
    {
        // checking if i is prime
        if (spf[i] == i)
        {
            // marking SPF for all numbers divisible by i
            for (int j=i*i; j<MAXN; j+=i)
 
                // marking spf[j] if it is not
                // previously marked
                if (spf[j]==j)
                    spf[j] = i;
        }
    }
}
 
// A O(log n) function returning primefactorization
// by dividing by smallest prime factor at every step
ll getFactorization(int x)
{
    set<int> ret;
    while (x != 1)
    {
        ret.insert(spf[x]);
        x = x / spf[x];
    }
    return ret.size();
}
 


void solve(ll hash[]){ 
    ll l,r;
    cin>>l>>r;
    map<ll,ll>ans;
    
    for(int i=l;i<=r;i++){
        ans[hash[i]]++;
    }
    ll fans=0;
    for(auto i:ans){
        ll te=i.second;
           fans=(fans+(te*(te-1)/2)%mod)%mod;
    }
    cout<<fans<<"\n";

}

int main(){
ios_base::sync_with_stdio(false);
cin.tie(NULL);
sieve();
ll t;cin>>t;
ll hash[100001];
for(int i=2;i<=100000;i++){
     hash[i]=getFactorization(i);
}
while(t--){
    solve(hash);
}
}