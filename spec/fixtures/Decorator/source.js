@decorator
class Foo {}

@decorator({ a: 1 })
class Bar {}

@decorator({
  @decorator
  method() {}
})
class Baz {
  @decorator
  method() {}
}

@decorator
@decorator
class Qux {}
