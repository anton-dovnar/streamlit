from setuptools import setup, find_packages

VERSION = "1.20.0"  # PEP-440
NAME = "streamlit"

# IMPORTANT: We should try very hard *not* to add dependencies to Streamlit.
# And if you do add one, make the required version as general as possible.
# But include relevant lower bounds for any features we use from our dependencies.
INSTALL_REQUIRES = [
    "altair<5,>=3.2.0",
    "blinker>=1.0.0",
    "cachetools>=4.0",
    "click>=7.0",
    # 1.4 introduced the functionality found in python 3.8's importlib.metadata module
    "importlib-metadata>=1.4",
    "numpy",
    "packaging>=14.1",
    "pandas<2,>=0.25",
    "pillow>=6.2.0",
    "protobuf<4,>=3.12",
    "pyarrow>=4.0",
    "pympler>=0.9",
    "python-dateutil",
    "requests>=2.4",
    "rich>=10.11.0",
    "semver",
    "toml",
    "typing-extensions>=3.10.0.0",
    "tzlocal>=1.1",
    "validators>=0.2",
    # Don't require watchdog on MacOS, since it'll fail without xcode tools.
    # Without watchdog, we fallback to a polling file watcher to check for app changes.
    "watchdog; platform_system != 'Darwin'",
]
EXTRA_REQUIRES = {"snowflake": ["snowflake-snowpark-python; python_version=='3.8'"]}

setup(
    name=NAME,
    version=VERSION,
    description="The fastest way to build data apps in Python",
    platforms=["POSIX"],
    url="https://github.com/anton-dovnar/streamlit",
    license="MIT",
    packages=find_packages(exclude=["tests"]),
    install_requires=INSTALL_REQUIRES,
    extras_require=EXTRA_REQUIRES,
    package_data={"streamlit": ["py.typed"]},
    python_requires=">=3.7, !=3.9.7",
    include_package_data=True,
    zip_safe=False,  # install source files not egg
    entry_points={"console_scripts": ["streamlit = streamlit.web.cli:main"]},
)
