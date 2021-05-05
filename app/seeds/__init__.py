from flask.cli import AppGroup
from .users import seed_users, undo_users
from .avatars import seed_avatars, undo_avatars
from .categories import seed_categories, undo_categories
from .events import seed_events, undo_events
from .registrations import seed_registrations, undo_registrations
from .comments import seed_comments, undo_comments
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_avatars()
    seed_users()
    seed_categories()
    seed_events()
    seed_registrations()
    seed_comments()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_avatars()
    undo_users()
    undo_categories()
    undo_events()
    undo_registrations()
    undo_comments()
    # Add other undo functions here
