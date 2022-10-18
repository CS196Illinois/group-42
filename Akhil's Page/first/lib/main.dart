import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter Text Demo'),
        ),
        
        body: Center(

          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            
            children: [
              
              TextButton(
                child: const Text('Hello'),
                onPressed: () {},
                style: TextButton.styleFrom(foregroundColor: Colors.green),
              ),
              
              ElevatedButton(
                child: const Text('Hello'),
                onPressed: () {},
                style: const ButtonStyle(
                  backgroundColor: MaterialStatePropertyAll<Color>(Colors.red),
                )
              ),
              
              OutlinedButton(
                child: const Text('Hello'),
                onPressed: () {},
              ),
              
              IconButton(icon: const Icon(Icons.add), onPressed: () {}),
            ],
          ),
        
        
        
        
        
        ),
      ),
    );
  }
}