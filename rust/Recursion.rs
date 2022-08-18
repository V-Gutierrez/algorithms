use std::collections::HashMap;

fn main() {
    let cache: HashMap<u64, u64> = HashMap::new();

    
   fn fibonnaci(n: u64) -> u64 {
        if n <= 1 {
            return n;
        }

        return fibonnaci(n - 1) + fibonnaci(n - 2);
    }

    fn factorial(n: u64) -> u64 {
        if n <= 0 {
            return 1;
        }

        return n * factorial(n - 1);
    }
}
