from contextlib import contextmanager, ContextDecorator

class Context(object):
    def __init__(self, value):
        print(value)

    def __enter__(self):
        print('enter')
        return self
    
    def __exit__(self, *args):
        print('exit')

with Context('haha') as ctx:
    print('do something')

@contextmanager
def mycontextmanager():
    print('before')
    yield 'value'
    print('after')

# with mycontextmanager() as mycm:
#     print('aaa')
#     print(mycm)
#     print('bbb')

class MyContext(ContextDecorator):
    def __init__(self, value):
        print('init')
        print(value)
    
    def __enter__(self):
        print('enter')
        return self
    
    def __exit__(self, *args):
        print('exit')

# @MyContext('heihei')
# def mytest():
#     print('test')

# mytest()

